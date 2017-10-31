class Ghost{
  constructor(name, scare){
    this.name = name;
    this.scare = scare;
  }

  scareFunction(){
    console.log('My name is '+this.name+'. '+this.scare)
  }
}

var ghostman = new Ghost('casper', 'bring out your dead');
ghostman.scareFunction();
