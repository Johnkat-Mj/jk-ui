import { useCallback, useRef } from 'react';

type CopyToClipboardOptions = {
    snippet: HTMLElement | string | undefined | null;
    onCopy?: () => void;
    onCopyCompleted?: () => void;
    timeout?: number;
}

/**
 * React hook for copying content to clipboard with callbacks
 * @returns copyToClipboard function
 */
export const useCopyToClipboard = () => {
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const copyToClipboard = useCallback(
        async ({
            snippet,
            onCopy,
            onCopyCompleted,
            timeout = 1000,
        }: CopyToClipboardOptions): Promise<void> => {
            // Early return if snippet is invalid
            if (!snippet || !(snippet instanceof HTMLElement || typeof snippet === 'string')) {
                return;
            }

            // Clear any existing timeout
            if (timerRef.current) {
                clearTimeout(timerRef.current);
                timerRef.current = null;
            }

            // Extract text to copy
            const valueToCopy = typeof snippet === 'string' ? snippet : snippet.innerText;

            // Execute onCopy callback
            onCopy?.();

            try {
                // Copy to clipboard
                await navigator.clipboard.writeText(valueToCopy);

                // Handle completion callback with timeout
                if (onCopyCompleted) {
                    timerRef.current = setTimeout(() => {
                        onCopyCompleted();
                        timerRef.current = null;
                    }, timeout);
                }
            } catch (error) {
                // Clear timeout on error
                if (timerRef.current) {
                    clearTimeout(timerRef.current);
                    timerRef.current = null;
                }
                console.error('Failed to copy to clipboard:', error);
                throw error;
            }
        },
        []
    );

    // Cleanup function to clear timeout on unmount
    const cleanup = useCallback(() => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }
    }, []);

    return { copyToClipboard, cleanup };
};

// Alternative: Standalone function (non-hook version)
export const copyToClipboard = async ({
    snippet,
    onCopy,
    onCopyCompleted,
    timeout = 1000,
}: CopyToClipboardOptions): Promise<void> => {
    if (!snippet || !(snippet instanceof HTMLElement || typeof snippet === 'string')) {
        return;
    }

    const valueToCopy = typeof snippet === 'string' ? snippet : snippet.innerText;

    onCopy?.();

    try {
        await navigator.clipboard.writeText(valueToCopy);

        if (onCopyCompleted) {
            setTimeout(onCopyCompleted, timeout);
        }
    } catch (error) {
        console.error('Failed to copy to clipboard:', error);
        throw error;
    }
};

