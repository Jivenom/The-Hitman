function alreadyIncluded(){
  return true;
}

function bootstrap(Bouvardiaversion){
	
	game_information = [];
	
	game_information["name"] = "The Hitman"
	game_information["publisher"] = "Jivenom"
	game_information["copyright"] = "Copyright Jivenom"
	game_information["version"] = "0.1"
	
	game_information["introduction"] = "Welcome To The Hitman Version 0.1"
	
	home_0 = [];
	
	home_0["name"] = "Home";
	home_0["description"] = "This is your House.";
	home_0["connectsWest"] = undefined;
	home_0["connectsEast"] = undefined;
	home_0["connectsNorth"] = undefined;
	home_0["connectsSouth"] = 1;
	home_0["item"] = 0;
	home_0["requiredItem"] = undefined;
	
	addRoom(home_0);
	
	driveway_1 = []
	
	driveway_1["name"] = "Driveway";
	driveway_1["description"] = "This is your Driveway. It is small and can hold one car.";
	driveway_1["connectsWest"] = undefined;
	driveway_1["connectsEast"] = undefined;
	driveway_1["connectsNorth"] = 0;
	driveway_1["connectsSouth"] = 3;
	driveway_1["item"] = 1;
	driveway_1["requiredItem"] = 0;
	
	addRoom(driveway_1);
	
		
	Sidewalk1_3 = [];
	
	Sidewalk1_3["name"] = "Sidewalk 1";
	Sidewalk1_3["description"] = "Just your average sidewalk";
	Sidewalk1_3["connectsWest"] = undefined;
	Sidewalk1_3["connectsEast"] = undefined;
	Sidewalk1_3["connectsNorth"] = 1;
	Sidewalk1_3["connectsSouth"] = undefined;
	Sidewalk1_3["item"] = 0;
	Sidewalk1_3["requiredItem"] = undefined;
	
	addRoom(Sidewalk1_3);
	
	item_0 = []
	item_0["name"] = "House Key";
	
	addItem(item_0);
	
	item_1 = []
	item_1["name"] = "Gas Can";
	
	addItem(item_1);
	
	return true;
}
