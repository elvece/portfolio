import { Component, AfterViewChecked, OnInit } from '@angular/core'

export interface Tile {
    id: number
    src: string
    text: string
}

/**
 * @title Dynamic grid-list
 */
@Component({
  selector: 'app-grid-list-tile',
  templateUrl: 'tile.component.html',
  styleUrls: ['tile.component.scss'],
})
export class GridListDynamicComponent implements AfterViewChecked {
  tiles: Tile[] = [
    {id: 1, text: 'One', src: 'assets/img/one.jpg' },
    {id: 2, text: 'Two', src: 'assets/img/two.jpg' },
    {id: 3, text: 'Three', src: 'assets/img/three.jpg' },
    {id: 4, text: 'Four', src: 'assets/img/four.jpg' },
    {id: 5, text: 'One', src: 'assets/img/one.jpg' },
    {id: 6, text: 'Two', src: 'assets/img/two.jpg' },
    {id: 7, text: 'Three', src: 'assets/img/three.jpg' },
    {id: 8, text: 'Four', src: 'assets/img/four.jpg' },
  ]

  ngAfterViewChecked() {
    this.resizeAllGridItems()
  }

  onResize(event) {
    this.resizeAllGridItems()
  }

  resizeGridItem(item) {
    const grid = document.getElementsByClassName('masonry')[0]
    const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'), 10)
    const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'), 10)
    const rowSpan = Math.ceil((item.querySelector('.masonry-content').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap))
    item.style.gridRowEnd = 'span ' + rowSpan
  }

  resizeAllGridItems() {
    const allItems = document.getElementsByClassName('masonry-brick')
    for (let x = 0; x < allItems.length; x++) {
      this.resizeGridItem(allItems[x])
    }
  }

}