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