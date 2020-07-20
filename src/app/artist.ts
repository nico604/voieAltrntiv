export class Artist { 
  constructor(artistID:number, name: string , link1:string, link2:string , bio:string , social1:string , social2:string, social3:string, persona:string) {
    this.artistID=artistID;
    this.name=name;
    this.link1=link1;
    this.link2=link2;
		this.bio=bio;
    this.social1=social1;
    this.social2=social2;
    this.social3=social3;
		this.persona=persona;
	}
 
  artistID:number;
  name:string;
  link1:string;
  link2:string;
  bio:string;
  social1:string;
  social2:string;
  social3:string;
  persona:string;
 
}