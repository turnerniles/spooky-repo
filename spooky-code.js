class Ghost(name, scare){
  constructor(name, scare){
    this.name = name;
    this.scare = scare;
  }

  scareFunction(){
    console.log('My name is'+this.name+'. '+this.scare)
  }
}

scareFunction('casper', 'bring out your dead');
