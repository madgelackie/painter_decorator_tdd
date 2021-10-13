const Room = function(area, isPainted){
    this.area = area;
    this.isPainted = isPainted;

    Room.prototype.hasBeenPainted = function(){
        return this.isPainted = true
    }
}
module.exports = Room;

// const Paint_Can

// const Decorator