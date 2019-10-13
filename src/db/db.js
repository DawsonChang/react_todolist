export const addList = title => {
	DBlists = [...DBlists, title];
}

export const deleteList = title => {
	DBlists = DBlists.filter(e => e !== title);
}

let DBlists = ["Clean the room", "Wash the car", "Walk the dog"];

export default DBlists;