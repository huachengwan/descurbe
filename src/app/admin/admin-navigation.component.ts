import { Component, OnInit, AfterViewInit, EventEmitter, Output } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbPanelChangeEvent, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
declare var $: any;

@Component({
  selector: 'admin-navigation',
  templateUrl: './admin-navigation.component.html',
  styleUrls: [
    './admin-navigation.component.scss'
  ]
})
export class AdminNavigationComponent implements OnInit {
  @Output() toggleSidebar = new EventEmitter<void>();

  public config: PerfectScrollbarConfigInterface = {};
  constructor(private modalService: NgbModal) {}

  public showSearch = false;

  notifications: Object[] = [];
  mymessages: Object[] = [];

  ngOnInit() {
  }

}
