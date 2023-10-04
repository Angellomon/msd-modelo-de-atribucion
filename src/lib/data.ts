import { read as readXLSX } from "xlsx";

interface Nameable {
	key: string;
	name: string;
}

export type Franchise = Nameable & {};
export type Channel = Nameable & {};
export type Material = Nameable & {};
export type Product = Nameable & {};

export type TMaterial = {
	targetScore: number;
	scoreAchieved: number;
	deviation: number;
	name: string;
};

// export type Product = {
// 	targetScore: number;
// 	scoreAchieved: number;
// 	deviation: number;
// 	name: string;
// };

export type MaterialScore = Material & {
	scoreAchieved: number;
	channelKey: string;
};

export type MaterialDeploymentCluster = Nameable & {
	targetScore: number;
	scoreAchived: number;
	deviation: number;

	materialsScore: MaterialScore[];

	impacts: number;
};

export type ChannelScore = Channel & {
	scoreAchived: number;
};

export type VisitFrequencyCluster = Nameable & {
	channels: ChannelScore[];
	historicData: HistoricData[];
	label: string;
};

export type MaterialsQtyCluster = Nameable & {
	channel: Channel;
	materials: Material[];
};

export type HistoricData = {
	// label: string;
	impacts: number;
	month: string;
};

export type ProductsCluster = {};

export type MaterialsDeploymentData = {
	materials: Material[];
};

const anestesia: Franchise = {
		key: "ansestesia",
		name: "Anestesia",
	},
	diabetes: Franchise = {
		key: "diabetes",
		name: "Diabetes",
	},
	oncologia: Franchise = {
		key: "oncologia",
		name: "Oncología",
	},
	vacunas: Franchise = {
		key: "vacunas",
		name: "Vacunas",
	};

export const franchises = [anestesia, diabetes, oncologia, vacunas];

const whatsapp: Channel = {
		key: "whatsapp",
		name: "WhatsApp",
	},
	ae: Channel = {
		key: "ae",
		name: "AE",
	},
	emkt: Channel = {
		key: "emkt",
		name: "E-Martketing",
	},
	f2f: Channel = {
		key: "f2f",
		name: "Face to Face",
	};

function createMaterialsData() {
	return;
}

function createMockData() {
	const historicData: HistoricData[] = [];
}

export function getData() {
	let data = createMockData();

	console.log(data);

	return data;
}

export async function loadDataFromExcel() {
	const path = "/data.xlsx";

	const file = await (await fetch(path)).arrayBuffer();

	const workbook = readXLSX(file);
}
