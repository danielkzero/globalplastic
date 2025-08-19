const menuComponente = {
    template: `
    <!-- header usando tailwind -->
    <header class="bg-white shadow-md transition-all duration-500">
        <div class="md:container mx-auto py-4 flex justify-between items-center">
            <div class="logo md:p-0 ps-3">
                <a href="/" class="text-2xl font-bold text-gray-800 hidden md:flex">
                    <img src="/assets/img/logomarca.png" alt="GlobalPlastic" class="h-10 inline">
                </a>
                <a href="/" class="text-2xl font-bold text-gray-800 flex md:hidden">
                    <img src="/assets/img/logomarca3.png" alt="GlobalPlastic" class="h-10 inline">
                </a>
            </div>

            <!-- search para buscar produtos no site -->
            <div class="search-bar flex-1 mx-4">
                <form action="/search" method="GET" class="relative">
                    <input type="text" name="q" placeholder="Buscar produtos..."
                        class="w-full border border-gray-300 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <button type="submit" class="absolute left-0 top-1 mt-2 ml-3 text-gray-400 hover:text-gray-600">
                        <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </button>
                </form>
            </div>

            <!-- menu com dropdown -->
            <!-- home, a empresa, produtos [construção civil, epi, supermercado, vasos, promoções e etc], contato, -->
            <nav class="relative">
                <div class="relative flex h-16 items-center justify-between">
                    <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div class="hidden sm:ml-6 sm:block">
                            <ul class="flex space-x-4 text-gray-600">
                                <li>
                                    <a href="#">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Empresa
                                    </a>
                                </li>
                                <li class="relative group">
                                    <a href="#" class="active:font-bold hover:text-blue-400
                                        text-center w-full no-underline sm:w-auto sm:pr-4 py-2 sm:py-1">
                                        Produtos
                                    </a>
                                    <div class="absolute z-10 hidden group-hover:block rounded-lg min-w-[200px] bg-white shadow-lg">
                                        <div class="p-4">
                                            <div class="dropdown-menu">
                                                <ul>
                                                    <li>Construção civil</li>
                                                    <li>Supermercado</li>
                                                    <li>EPI's</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a href="#">
                                        Contato
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="md:hidden flex p-3 mr-3">
                            <i class='bxr bx-menu text-2xl'></i>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </header>
    `
}