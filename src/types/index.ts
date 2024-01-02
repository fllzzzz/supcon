export type Message = {
	name :string;
	host :string;
	baseHost :string;
	specialtyController :SpecialtyController;
};

type SpecialtyController = {
	screen :string;
	transparentlyScreen :string;
};

type MetaData = {
	host :string;
};

type ItemOptions = {
	name :string;
	metadata :MetaData;
};

export type AppOptions = {
	theme :'green' | 'yellow';
	baseHost :ItemOptions['metadata']['host'];
	itemOptions :ItemOptions[];
}; 







export type Result<T = any> = {
	code :number;
	message :string;
	data :T
};

export type DeviceIconBindType = {
	type :string;
	icon :string;
};

export type DeviceType = {
	id :number;
	type :string;
};

export type DeviceNumberType = {
	id :number;
	type :string;
	number :number;
};

export type DeviceInfoType = {
	id :number;
	status :string;
	info :infoType;
};

export type infoType = {
	name :string;
	ip :string;
	mac :string;
};

export type List<T = any> = {
	list :T[];
};



export type globalReactiveType = {
	deviceTypes :DeviceType[];
	deviceIconBinds :DeviceIconBindType[];
	deviceNumber :DeviceNumberType[];
	deviceInfo :DeviceInfoType[];
};
export type globalStaticType = {
	
};