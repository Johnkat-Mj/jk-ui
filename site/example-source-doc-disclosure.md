## Demo

- Preview
- Code

Add tax details
You can add your tax information to your invoices, including your company name, tax ID, and billing address.

With Plus sign Indicator
You can add your tax information to your invoices, including your company name, tax ID, and billing address.

```
<div class="w-full max-w-xs flex flex-col gap-4">
    <div class="flex flex-col w-full max-w-xs">
        <x-ui.collapse.trigger target="demo-collapse" class="gap-2 text-sm text-fg py-1 w-full justify-between">
            <div> Add tax details</div>
        </x-ui.collapse.trigger>
        <x-ui.collapse id="demo-collapse">
            <p class="text-fg-muted text-sm">
                You can add your tax information to your invoices, including your company name, tax ID, and billing
                address.
            </p>
        </x-ui.collapse>
    </div>

    <div class="flex flex-col w-full max-w-xs">
        <x-ui.collapse.trigger indicatorType="plus-sign" target="demo-collapse-2"
            class="gap-2 text-sm text-fg py-1 w-full justify-between">
            <div class="flex-1 truncate text-left">With Plus sign Indicator</div>
        </x-ui.collapse.trigger>
        <x-ui.collapse id="demo-collapse-2">
            <p class="text-fg-muted text-sm">
                You can add your tax information to your invoices, including your company name, tax ID, and billing
                address.
            </p>
        </x-ui.collapse>
    </div>

</div>
```

## Installation

Install the component

1. Install the component Shell php artisan flexi:add collapse
2. Install dependencies This component requires JS. By default we're using our own Interactive Component Library Flexilla . Shell npm i @flexilla/collapse
3. Usage With Alpine/Livewire Add plugin in app.js flexilla.js import { CollapsePlugin } from "./plugins/collapse"; Alpine.plugin(CollapsePlugin) Without Alpine Initialize accordion in app.js flexilla.js import { Collapse } from "@flexilla/collapse" // init collapse for all Element with data-app-collapse attribute Collapse.autoInit('[data-app-collapse]')
  1. With Alpine/Livewire
  2. Without Alpine

## Close height

You can determine the minimum height for closing collapse

- Preview
- Code

#### Premium Wireless Headphones

Experience crystal-clear audio with our premium noise-canceling headphones. Featuring 40-hour battery life, adaptive sound technology, and memory foam ear cushions for all-day comfort.

Includes: Carrying case, USB-C charging cable, airplane adapter, and 3.5mm audio cable. Compatible with iOS, Android, Windows, and macOS. 2-year warranty included.

Trigger Collapse
```
<div class="max-w-md w-full">
    <x-ui.collapse
        :close-height="90"
        id="collapseMinHeight"
        class="w-full relative group"
    >
        <div
            class="rounded-md bg-bg-surface border border-border-input px-4 pt-4 pb-10 w-full h-full relative"
        >
            <div class="w-full flex flex-col space-y-3 overflow-hidden">
                <h4 class="font-semibold text-fg-title text-sm">Premium Wireless Headphones</h4>
                <p class="inline-flex text-fg-muted text-sm">
                    Experience crystal-clear audio with our premium noise-canceling headphones. Featuring 40-hour battery life, adaptive sound technology, and memory foam ear cushions for all-day comfort.
                </p>
                <p class="inline-flex text-fg-muted text-sm">
                    Includes: Carrying case, USB-C charging cable, airplane adapter, and 3.5mm audio cable. Compatible with iOS, Android, Windows, and macOS. 2-year warranty included.
                </p>
            </div>
        </div>
        <span
            class="absolute inset-x-0 h-8 bg-linear-to-t from-bg-muted flex -bottom-0.5 rounded-b-lg z-9 group-fx-open:hidden"
        ></span>
        <x-ui.collapse.trigger target="collapseMinHeight"
            class="btn btn-sm btn-solid btn-solid-neutral gap-2 text-bg rounded-ui text-sm w-max absolute bottom-4 group-fx-open:bottom-2 ease-linear duration-200 left-1/2 -translate-x-1/2 z-10"
        >
            Trigger Collapse
        </x-ui.collapse.trigger>
    </x-ui.collapse>
</div>
```
