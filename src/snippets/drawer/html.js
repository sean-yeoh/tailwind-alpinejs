export default `<button data-drawer-id="drawer-1" type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
  Open Drawer
</button>

<div x-data="drawer" x-cloak id="drawer-1" class="fixed inset-0 overflow-hidden" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
  <div class="absolute inset-0 overflow-hidden">
    <div x-bind="drawerOverlay" class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

    <div class="fixed inset-y-0 right-0 pl-10 max-w-full flex">
      <div x-bind="drawerContent" class="w-screen max-w-md">
        <div class="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
          <div class="px-4 sm:px-6">
            <div class="flex items-start justify-between">
              <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">
                Panel title
              </h2>
              <div class="ml-3 h-7 flex items-center">
                <button x-bind="drawerClose" type="button" class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <span class="sr-only">Close panel</span>
                  <!-- Heroicon name: outline/x -->
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="mt-6 relative flex-1 px-4 sm:px-6">
            <!-- Replace with your content -->
            <div class="absolute inset-0 px-4 sm:px-6">
              <div class="h-full border-2 border-dashed border-gray-200" aria-hidden="true"></div>
            </div>
            <!-- /End replace -->
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`
