export class Artist { 
  constructor(artistID:number, name: string , src:string, bio:string , persona:string) {
    this.artistID=artistID;
    this.name=name;
    this.src=src;
		this.bio=bio;
		this.persona=persona;
	}
 
  artistID:number ;
  name:string ;
  src:string;
  bio:string;
  persona:string;
 
}