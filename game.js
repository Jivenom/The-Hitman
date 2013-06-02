function alreadyIncluded(){
  return true;
}

function bootstrap(Bouvardiaversion){
	
	game_information = [];
	
	game_information["name"] = "The Hitman"
	game_information["publisher"] = "Jivenom"
	game_information["copyright"] = "Copyright Jivenom"
	game_information["version"] = "0.1"
	
	game_information["introduction"] = "Welcome To The Hitman Verision 0.1"
	
	home_0 = [];
	
	home_0["name"] = "Home";
	home_0["description"] = "This is you House.";
	home_0["connectsWest"] = undefined;
	home_0["connectsEast"] = 1;
	home_0["connectsNorth"] = undefined;
	home_0["connectsSouth"] = undefined;
	home_0["item"] = 0;
	home_0["requiredItem"] = undefined;
	
	addRoom(home_0);
	
	room_1 = []
	
	room_1["name"] = "Room One";
	room_1["description"] = "This. Is. Room. One.";
	room_1["connectsWest"] = 0;
	room_1["connectsEast"] = undefined;
	room_1["connectsNorth"] = undefined;
	room_1["connectsSouth"] = undefined;
	room_1["item"] = undefined;
	room_1["requiredItem"] = 0;
	
	addRoom(room_1);
	
	item_0 = []
	item_0["name"] = "House Key";
	
	addItem(item_0);
	return true;
}
