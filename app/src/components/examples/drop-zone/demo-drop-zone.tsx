"use client"

import {Text} from 'react-aria-components';
import {useState} from 'react';
import React from 'react';
import { DropZone } from '@/components/jk/drop-zone';

export const DemoDropZone = ()=> {
  const [content, setContent] = useState<string | React.ReactElement | null>(null);
  return (
    <DropZone
      // Determine whether dragged content should be accepted.
      getDropOperation={types => (
        ['text/plain', 'image/jpeg', 'image/png', 'image/gif'].some(t => types.has(t)) ? 'copy' : 'cancel'
      )}
      onDrop={async (event) => {
        // Find the first accepted item.
        const item = event.items.find(item => (
          (item.kind === 'text' && item.types.has('text/plain')) ||
          (item.kind === 'file' && item.type.startsWith('image/'))
        ));

        if (item?.kind === 'text') {
          const text = await item.getText('text/plain');
          setContent(text);
        } else if (item?.kind === 'file') {
          const file = await item.getFile();
          const url = URL.createObjectURL(file);
          setContent(<img src={url} alt={item.name} style={{maxHeight: 100, maxWidth: '100%'}} />)
        }
      }}>
      <Text slot="label">
        {content || "Drop or paste text or images here"}
      </Text>
    </DropZone>
  );
}
