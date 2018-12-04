export class ItemOfEvent {
  public title: string;
  public link: string;
  public image_file: string;
  public short_desc: string;
  public date: string;
  public time: string;
  constructor (title, link, image_file, short_desc, date, time) {
    this.title = title;
    this.link = link;
    this.image_file = image_file;
    this.short_desc = short_desc;
    this.date = date;
    this.time = time;
  }
}
