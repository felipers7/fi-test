import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-dropdown',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-container *ngIf="isOpen">
      <!-- Overlay para cerrar el dropdown al hacer click fuera -->
      <div 
        class="fixed inset-0 z-40 bg-transparent user-dropdown-overlay" 
        (click)="onClose.emit()"
        aria-hidden="true"
      ></div>
      
      <!-- Dropdown menu -->
      <div
        class="absolute top-full right-0 mt-2 z-50 animate-dropdown-appear user-dropdown-container"
        style="transform-origin: top right"
        data-name="user-dropdown"
      >
        <div
          class="bg-[#ffffff] relative rounded-xl shadow-[0px_4px_14px_0px_rgba(0,0,0,0.1)] w-[343px]"
          data-name="desplegables-user"
        >
          <div class="relative size-full">
            <div class="box-border content-stretch flex flex-col gap-3 items-start justify-start p-[16px] relative size-full">
              
              <!-- User Info Section -->
              <div class="relative shrink-0 w-[311px]">
                <div class="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative w-[311px]">
                  <!-- User Info -->
                  <div class="relative shrink-0 w-full">
                    <div class="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative w-full">
                      <!-- Profile Image -->
                      <div
                        class="bg-center bg-cover bg-no-repeat h-20 relative rounded-lg shrink-0 w-[102px]"
                        [style.background-image]="'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==)'"
                        data-name="Perfil"
                      >
                        <div class="flex flex-col items-center justify-center relative size-full">
                          <div class="h-20 w-[102px]"></div>
                        </div>
                      </div>
                      
                      <!-- User Details -->
                      <div class="flex flex-row items-center self-stretch flex-1">
                        <div class="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Nombre">
                          <div class="box-border content-stretch flex flex-col gap-1.5 items-start justify-center leading-[0] p-0 relative size-full text-left">
                            <div
                              class="flex flex-col font-['Roboto:Medium',_sans-serif] font-medium justify-start relative shrink-0 text-[18px] text-neutral-700 w-full"
                              style="font-variation-settings: 'wdth' 100"
                            >
                              <p class="block leading-[normal] text-left">{{ userName }}</p>
                            </div>
                            <div
                              class="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-start relative shrink-0 text-[#9e9e9e] text-[11px] w-full"
                              style="font-variation-settings: 'wdth' 100"
                            >
                              <p class="block leading-[normal] text-left">{{ userRole }}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Separator -->
                  <div class="h-0 relative shrink-0 w-full">
                    <div class="absolute bottom-0 left-0 right-0 top-[-1px]">
                      <svg
                        class="block size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 311 1"
                      >
                        <g>
                          <line
                            stroke="#D0D5DD"
                            x2="311"
                            y1="0.5"
                            y2="0.5"
                            class="user-dropdown-separator"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Menu Items Section -->
              <div class="relative shrink-0 w-full">
                <div class="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative w-full">
                  <!-- Mi perfil -->
                  <div
                    class="h-11 relative rounded-[99px] shrink-0 w-full cursor-pointer transition-all duration-200 user-dropdown-item"
                    [class.bg-gray-50]="hoveredItem() === 'profile'"
                    data-name="Nav item"
                    (click)="handleItemClick('profile')"
                    (mouseenter)="setHoveredItem('profile')"
                    (mouseleave)="setHoveredItem(null)"
                    role="button"
                    tabindex="0"
                    (keydown.enter)="handleItemClick('profile')"
                    (keydown.space)="handleItemClick('profile')"
                  >
                    <div class="box-border content-stretch flex flex-row gap-3 h-11 items-center justify-start overflow-clip p-0 relative w-full">
                      <div class="basis-0 grow min-h-px min-w-px relative shrink-0">
                        <div class="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative w-full">
                          <div class="relative shrink-0">
                            <div class="box-border content-stretch flex flex-row gap-2.5 items-start justify-start p-0 relative">
                              <!-- Profile Icon -->
                              <div class="relative shrink-0 size-6 nav-item-icon">
                                <svg
                                  class="block size-full"
                                  fill="none"
                                  preserveAspectRatio="none"
                                  viewBox="0 0 24 24"
                                >
                                  <g>
                                    <path
                                      d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                                      fill="#404040"
                                    />
                                    <path
                                      d="M12 14C8.13401 14 5 17.134 5 21C5 21.5523 5.44772 22 6 22H18C18.5523 22 19 21.5523 19 21C19 17.134 15.866 14 12 14Z"
                                      fill="#404040"
                                    />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div
                            class="basis-0 flex flex-col font-['Roboto:Medium',_sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative self-stretch shrink-0 text-[14px] text-left transition-colors duration-200 nav-item-text"
                            [class]="hoveredItem() === 'profile' ? 'text-[#404040]' : 'text-[#9e9e9e]'"
                            style="font-variation-settings: 'wdth' 100"
                          >
                            <p class="block leading-[normal]">Mi perfil</p>
                          </div>
                        </div>
                      </div>
                      <!-- Arrow -->
                      <div class="flex h-[24.023px] items-center justify-center relative shrink-0 w-[24.023px]">
                        <div class="flex-none rotate-[269.945deg] transition-transform duration-200 nav-item-arrow"
                             [class.scale-110]="hoveredItem() === 'profile'">
                          <div class="relative size-6">
                            <svg
                              class="block size-full"
                              fill="none"
                              preserveAspectRatio="none"
                              viewBox="0 0 24 24"
                            >
                              <g>
                                <path
                                  d="M7 14L12 9L17 14"
                                  fill="#404040"
                                />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Configuración -->
                  <div
                    class="h-11 relative rounded-[99px] shrink-0 w-full cursor-pointer transition-all duration-200 user-dropdown-item"
                    [class.bg-gray-50]="hoveredItem() === 'settings'"
                    data-name="Nav item"
                    (click)="handleItemClick('settings')"
                    (mouseenter)="setHoveredItem('settings')"
                    (mouseleave)="setHoveredItem(null)"
                    role="button"
                    tabindex="0"
                    (keydown.enter)="handleItemClick('settings')"
                    (keydown.space)="handleItemClick('settings')"
                  >
                    <div class="box-border content-stretch flex flex-row gap-3 h-11 items-center justify-start overflow-clip p-0 relative w-full">
                      <div class="basis-0 grow min-h-px min-w-px relative shrink-0">
                        <div class="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative w-full">
                          <div class="relative shrink-0">
                            <div class="box-border content-stretch flex flex-row gap-2.5 items-start justify-start p-0 relative">
                              <!-- Settings Icon -->
                              <div class="relative shrink-0 size-6 nav-item-icon">
                                <svg
                                  class="block size-full"
                                  fill="none"
                                  preserveAspectRatio="none"
                                  viewBox="0 0 24 24"
                                >
                                  <g>
                                    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="#404040" />
                                    <path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z" fill="#404040" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div
                            class="basis-0 flex flex-col font-['Roboto:Medium',_sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative self-stretch shrink-0 text-[14px] text-left transition-colors duration-200 nav-item-text"
                            [class]="hoveredItem() === 'settings' ? 'text-[#404040]' : 'text-[#9e9e9e]'"
                            style="font-variation-settings: 'wdth' 100"
                          >
                            <p class="block leading-[normal]">Configuración</p>
                          </div>
                        </div>
                      </div>
                      <!-- Arrow -->
                      <div class="flex h-[24.023px] items-center justify-center relative shrink-0 w-[24.023px]">
                        <div class="flex-none rotate-[269.945deg] transition-transform duration-200 nav-item-arrow"
                             [class.scale-110]="hoveredItem() === 'settings'">
                          <div class="relative size-6">
                            <svg
                              class="block size-full"
                              fill="none"
                              preserveAspectRatio="none"
                              viewBox="0 0 24 24"
                            >
                              <g>
                                <path
                                  d="M7 14L12 9L17 14"
                                  fill="#404040"
                                />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Cambiar clave -->
                  <div
                    class="h-11 relative rounded-[99px] shrink-0 w-full cursor-pointer transition-all duration-200 user-dropdown-item"
                    [class.bg-gray-50]="hoveredItem() === 'changePassword'"
                    data-name="Nav item"
                    (click)="handleItemClick('changePassword')"
                    (mouseenter)="setHoveredItem('changePassword')"
                    (mouseleave)="setHoveredItem(null)"
                    role="button"
                    tabindex="0"
                    (keydown.enter)="handleItemClick('changePassword')"
                    (keydown.space)="handleItemClick('changePassword')"
                  >
                    <div class="box-border content-stretch flex flex-row gap-3 h-11 items-center justify-start overflow-clip p-0 relative w-full">
                      <div class="basis-0 grow min-h-px min-w-px relative shrink-0">
                        <div class="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative w-full">
                          <div class="relative shrink-0">
                            <div class="box-border content-stretch flex flex-row gap-2.5 items-start justify-start p-0 relative">
                              <!-- Key Icon -->
                              <div class="relative shrink-0 size-6 nav-item-icon">
                                <svg
                                  class="block size-full"
                                  fill="none"
                                  preserveAspectRatio="none"
                                  viewBox="0 0 24 24"
                                >
                                  <g>
                                    <path
                                      d="M21 8V6C21 3.79086 19.2091 2 17 2H7C4.79086 2 3 3.79086 3 6V18C3 20.2091 4.79086 22 7 22H17C19.2091 22 21 20.2091 21 18V16M21 8H19C17.8954 8 17 8.89543 17 10C17 11.1046 17.8954 12 19 12H21M21 8V12"
                                      fill="#404040"
                                    />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div
                            class="basis-0 flex flex-col font-['Roboto:Medium',_sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative self-stretch shrink-0 text-[14px] text-left transition-colors duration-200 nav-item-text"
                            [class]="hoveredItem() === 'changePassword' ? 'text-[#404040]' : 'text-[#9e9e9e]'"
                            style="font-variation-settings: 'wdth' 100"
                          >
                            <p class="block leading-[normal]">Cambiar clave</p>
                          </div>
                        </div>
                      </div>
                      <!-- Arrow -->
                      <div class="flex h-[24.023px] items-center justify-center relative shrink-0 w-[24.023px]">
                        <div class="flex-none rotate-[269.945deg] transition-transform duration-200 nav-item-arrow"
                             [class.scale-110]="hoveredItem() === 'changePassword'">
                          <div class="relative size-6">
                            <svg
                              class="block size-full"
                              fill="none"
                              preserveAspectRatio="none"
                              viewBox="0 0 24 24"
                            >
                              <g>
                                <path
                                  d="M7 14L12 9L17 14"
                                  fill="#404040"
                                />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Logout Section -->
              <div class="relative shrink-0 w-full">
                <div class="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative w-full">
                  <!-- Separator -->
                  <div class="h-0 relative shrink-0 w-full">
                    <div class="absolute bottom-0 left-0 right-0 top-[-1px]">
                      <svg
                        class="block size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 311 1"
                      >
                        <g>
                          <line
                            stroke="#D0D5DD"
                            x2="311"
                            y1="0.5"
                            y2="0.5"
                            class="user-dropdown-separator"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                  
                  <!-- Cerrar sesión -->
                  <div
                    class="h-11 relative rounded-[99px] shrink-0 w-full cursor-pointer transition-all duration-200 user-dropdown-item logout-item"
                    [class.bg-red-50]="hoveredItem() === 'logout'"
                    data-name="Nav item"
                    (click)="handleItemClick('logout')"
                    (mouseenter)="setHoveredItem('logout')"
                    (mouseleave)="setHoveredItem(null)"
                    role="button"
                    tabindex="0"
                    (keydown.enter)="handleItemClick('logout')"
                    (keydown.space)="handleItemClick('logout')"
                  >
                    <div class="box-border content-stretch flex flex-row gap-3 h-11 items-center justify-start overflow-clip p-0 relative w-full">
                      <div class="basis-0 grow min-h-px min-w-px relative shrink-0">
                        <div class="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative w-full">
                          <div class="relative shrink-0">
                            <div class="box-border content-stretch flex flex-row gap-2.5 items-start justify-start p-0 relative">
                              <!-- Logout Icon -->
                              <div class="relative shrink-0 size-6 nav-item-icon">
                                <svg
                                  class="block size-full"
                                  fill="none"
                                  preserveAspectRatio="none"
                                  viewBox="0 0 24 24"
                                >
                                  <g>
                                    <path
                                      d="M15.75 9V5.25C15.75 4.00736 14.7426 3 13.5 3H6C4.75736 3 3.75 4.00736 3.75 5.25V18.75C3.75 19.9926 4.75736 21 6 21H13.5C14.7426 21 15.75 19.9926 15.75 18.75V15M19.5 12L16.5 9M19.5 12L16.5 15M19.5 12H9"
                                      fill="#404040"
                                    />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div
                            class="basis-0 flex flex-col font-['Roboto:Medium',_sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative self-stretch shrink-0 text-[14px] text-left transition-colors duration-200 nav-item-text"
                            [class]="hoveredItem() === 'logout' ? 'text-[#dc2677]' : 'text-[#9e9e9e]'"
                            style="font-variation-settings: 'wdth' 100"
                          >
                            <p class="block leading-[normal]">Cerrar sesión</p>
                          </div>
                        </div>
                      </div>
                      <!-- No arrow for logout -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ng-container>
  `,
  styleUrls: ['./user-dropdown.component.css']
})
export class UserDropdownComponent {
  @Input() isOpen: boolean = false;
  @Input() userName: string = 'José Rodríguez';
  @Input() userRole: string = 'Administrador';
  
  @Output() onClose = new EventEmitter<void>();

  hoveredItem = signal<string | null>(null);

  setHoveredItem(item: string | null): void {
    this.hoveredItem.set(item);
  }

  handleItemClick(action: string): void {
    console.log(`${action} clicked`);
    
    switch (action) {
      case 'profile':
        console.log('Navigating to profile page');
        break;
      case 'settings':
        console.log('Opening settings');
        break;
      case 'changePassword':
        console.log('Opening change password dialog');
        break;
      case 'logout':
        console.log('Logging out user');
        // Aquí podrías agregar la lógica de logout
        break;
      default:
        break;
    }
    
    // Cerrar el dropdown después de la acción
    this.onClose.emit();
  }
}