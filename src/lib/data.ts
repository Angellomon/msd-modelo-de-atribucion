import type { Dayjs } from 'dayjs';

interface Nameable {
	key: string;
	name: string;
}

interface Name extends Nameable {}
interface Franchise extends Nameable {}
interface Channel extends Nameable {}
interface Material extends Nameable {
	channel: Channel;
	franchise: Franchise;
}

export type TMaterial = {
	targetScore: number;
	scoreAchieved: number;
	deviation: number;
	name: string;
};

export type Product = {
	targetScore: number;
	scoreAchieved: number;
	deviation: number;
	name: string;
};

export type TChannel = {
	name: string;
	materials: Material[];
	products: Product[];
};

// export type Cluster = {
// 	name: string;
// 	key: string;
// 	data: Channel[];
// 	impacts: number;
// };

export type HistoricData = {
	clusterKey: string;
	impacts: number;
	date: Dayjs;
};

export type ProductsCluster = {};

export type MaterialsDeploymentData = {
	materials: Material[];
};

const anestesia: Franchise = {
		key: 'ansestesia',
		name: 'Anestesia'
	},
	diabetes: Franchise = {
		key: 'diabetes',
		name: 'Diabetes'
	},
	oncologia: Franchise = {
		key: 'oncologia',
		name: 'Oncología'
	},
	vacunas: Franchise = {
		key: 'vacunas',
		name: 'Vacunas'
	};

export const franchises = [anestesia, diabetes, oncologia, vacunas];

const whatsapp: Channel = {
		key: 'whatsapp',
		name: 'WhatsApp'
	},
	ae: Channel = {
		key: 'ae',
		name: 'AE'
	},
	emkt: Channel = {
		key: 'emkt',
		name: 'E-Martketing'
	},
	f2f: Channel = {
		key: 'f2f',
		name: 'Face to Face'
	};

export const materials: Material[] = [
	{
		channel: ae,
		franchise: anestesia,
		key: 'centro-excelencia-manejo-bnim',
		name: 'Centro de Excelencia (CoE) en el manejo del BNM'
	},
	{
		channel: ae,
		franchise: anestesia,
		key: 'anes-23-anestesia-libre-de-opioides',
		name: 'Anes 23: Anestesia Libre de Opioides'
	},
	{
		channel: ae,
		franchise: anestesia,
		key: 'anes-23-optimizando-el-desenlace-quirurgico',
		name: 'Anes 23: Optimizando el desenlace quirúrgico'
	},
	{
		channel: ae,
		franchise: anestesia,
		key: 'anes-23-bridge-to-the-future',
		name: 'Anes 23: Bridge to the future'
	},
	{
		channel: ae,
		franchise: anestesia,
		key: 'nias-masterclass-2022',
		name: 'NIAS Master Class 2022'
	},
	{
		channel: ae,
		franchise: anestesia,
		key: 'onicit-nueva-imagen',
		name: 'ONICIT nueva imagen'
	},
	{
		channel: emkt,
		franchise: anestesia,
		key: 'coe-manejo-multidisciplinario-cirugia bariatrica',
		name: 'COE: Manejo Multidisciplinario Cirugía Bariátrica'
	},
	{
		channel: emkt,
		franchise: anestesia,
		key: 'nias-digital-mexico-bridion',
		name: 'NIAS digital México Bridion'
	},
	{
		channel: emkt,
		franchise: anestesia,
		key: 'anes-23-optimizando-el-desenlace-quirúrgico',
		name: 'Anes 23: Optimizando el desenlace quirúrgico'
	},
	{
		channel: emkt,
		franchise: anestesia,
		key: 'onicit-nueva-imagen',
		name: 'ONICIT nueva imagen'
	},
	{
		channel: whatsapp,
		franchise: anestesia,
		key: 'connecting-anesthesia',
		name: 'Connecting Anesthesia'
	},
	{
		channel: whatsapp,
		franchise: anestesia,
		key: 'anestesia-2020',
		name: 'Anestesia 2020'
	},
	{
		channel: whatsapp,
		franchise: anestesia,
		key: 'nias-digital-mexico-bridion',
		name: 'NIAS digital México Bridion'
	},
	{
		channel: whatsapp,
		franchise: anestesia,
		key: 'centro-de-excelencia-coe-en-el-manejo-del-bnm',
		name: 'Centro de Excelencia (CoE) en el Manejo del BNM'
	},
	{
		channel: ae,
		franchise: diabetes,
		key: 'colab-1',
		name: 'COLAB'
	},
	{
		channel: ae,
		franchise: diabetes,
		key: 'gobierno-diabetes',
		name: 'Gobierno Diabetes'
	},
	{
		channel: ae,
		franchise: diabetes,
		key: 'diabetes-23-privado-others',
		name: 'Diabetes 23: Privado - Others'
	},
	{
		channel: ae,
		franchise: diabetes,
		key: 'diabetes-23-privado-idpp-4',
		name: 'Diabetes 23: Privado - iDPP-4'
	},
	{
		channel: ae,
		franchise: diabetes,
		key: 'diabetes-23-iabetes-360',
		name: 'Diabetes 23: Diabetes 360'
	},
	{
		channel: ae,
		franchise: diabetes,
		key: 'diabetes-23-diabetalks',
		name: 'Diabetes 23: DiabeTalks'
	},
	{
		channel: ae,
		franchise: diabetes,
		key: 'diabetes-23-jan-y-nuvia',
		name: 'Diabetes 23: Jan y Nuvia'
	},
	{
		channel: emkt,
		franchise: diabetes,
		key: 'covid-y-diabetes',
		name: 'COVID y Diabetes'
	},
	{
		channel: emkt,
		franchise: diabetes,
		key: 'webcast-rol-dpp4',
		name: 'Webcast Rol DPP4'
	},
	{
		channel: emkt,
		franchise: diabetes,
		key: 'gobierno-diabetes',
		name: 'Gobierno Diabetes'
	},
	{
		channel: whatsapp,
		franchise: diabetes,
		key: 'colab-2',
		name: 'COLAB'
	},
	{
		channel: whatsapp,
		franchise: diabetes,
		key: 'diabetes-2020',
		name: 'Diabetes 2020'
	},
	{
		channel: whatsapp,
		franchise: diabetes,
		key: 'gobierno-diabetes',
		name: 'Gobierno Diabetes'
	},
	{
		channel: ae,
		franchise: oncologia,
		key: 'carcinoma-urotelial-en-imss',
		name: 'Carcinoma Urotelial en IMSS'
	},
	{
		channel: ae,
		franchise: oncologia,
		key: 'educacion-medica-gu',
		name: 'Educación Médica GU'
	},
	{
		channel: ae,
		franchise: oncologia,
		key: 'asco-2020',
		name: 'ASCO 2020'
	},
	{
		channel: ae,
		franchise: oncologia,
		key: 'onco-23-cancer-urotelial-reprint-kn052',
		name: 'Onco 23: Cáncer Urotelial Reprint KN052'
	},
	{
		channel: emkt,
		franchise: oncologia,
		key: 'comercializacion-gardasil-en-mercado-privado',
		name: 'Comercialización Gardasil en mercado Privado'
	},
	{
		channel: emkt,
		franchise: oncologia,
		key: 'esmo-2020',
		name: 'ESMO 2020'
	},
	{
		channel: emkt,
		franchise: oncologia,
		key: 'cancer-expert-now',
		name: 'Cancer Expert now'
	},
	{
		channel: whatsapp,
		franchise: oncologia,
		key: 'carcinoma-urotelial-evidencia-a-largo-plazo-del-kn-045',
		name: 'Carcinoma Urotelial evidencia a largo plazo del KN-045'
	},
	{
		channel: whatsapp,
		franchise: oncologia,
		key: 'evento-de-lanzamiento-keytruda',
		name: 'Evento de Lanzamiento Keytruda'
	},
	{
		channel: whatsapp,
		franchise: oncologia,
		key: 'consolidando-la-ruta-del-paciente-con-cancer-de-pulmon',
		name: 'Consolidando la ruta del paciente con cáncer de pulmón'
	},
	{
		channel: whatsapp,
		franchise: oncologia,
		key: 'inmunoverso-2-0',
		name: 'Inmunoverso 2.0'
	},
	{
		channel: ae,
		franchise: vacunas,
		key: 'vacunas-2020',
		name: 'Vacunas 2020'
	},
	{
		channel: ae,
		franchise: vacunas,
		key: 'evento-2do-encuentro-digital',
		name: 'Evento 2do Encuentro Digital'
	},
	{
		channel: ae,
		franchise: vacunas,
		key: 'evento-vph',
		name: 'Evento VPH'
	},
	{
		channel: ae,
		franchise: vacunas,
		key: 'xv-gardasil',
		name: 'XV Gardasil'
	},
	{
		channel: emkt,
		franchise: vacunas,
		key: 'vacunas-23-venavac',
		name: 'Vacunas 23: Venavac'
	},
	{
		channel: emkt,
		franchise: vacunas,
		key: 'vacunas-23-franquicia',
		name: 'Vacunas 23: Franquicia'
	},
	{
		channel: emkt,
		franchise: vacunas,
		key: 'vacunas-23-gardasil',
		name: 'Vacunas 23: Gardasil'
	},
	{
		channel: emkt,
		franchise: vacunas,
		key: 'venavac',
		name: 'VenaVac'
	},
	{
		channel: whatsapp,
		franchise: vacunas,
		key: 'experiencia-en-estudios',
		name: 'Experiencia en estudios'
	},
	{
		channel: whatsapp,
		franchise: vacunas,
		key: 'evento-vph-2',
		name: 'Evento VPH'
	},
	{
		channel: whatsapp,
		franchise: vacunas,
		key: 'vacunacion-a-lo-largo-de-la-vida',
		name: 'Vacunación a lo largo de la vida'
	},
	{
		channel: whatsapp,
		franchise: vacunas,
		key: 'vacunas-23-gardasil-9',
		name: 'Vacunas23Gardasil 9'
	}
];

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
