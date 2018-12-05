export class ItemOfEvent {
  public title: string;
  public link: string;
  public image_file: string;
  public short_desc: string;
  public date: string;
  public time: string;
  public desc_html_file: string;
  constructor (title, link) {
    this.title = title;
    this.link = link;
  }
}
