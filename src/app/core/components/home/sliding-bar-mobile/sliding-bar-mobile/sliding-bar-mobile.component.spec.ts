<div class="mobile-slider-container" >
  <h2 class="slider-title" > Pourquoi nous choisir ? </h2>

    < div class="slider-wrapper" >
      <div class="slider" id = "slider" >
        <div class="slider-item" * ngFor="let item of items" >
          <img[src]="item.icon" class="icon" />
            <h3>{{ item.title }}</h3>
              < p > {{ item.text }}</p>
                </div>
                </div>
                </div>

                < div class="arrow-buttons" >
                  <button class="arrow"(click) = "scrollLeft()" >‹</button>
                    < button class="arrow"(click) = "scrollRight()" >›</button>
                      </div>
                      </div>