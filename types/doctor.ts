import { StaticImageData } from "next/image";

interface IDoctor {
  id: string;
  name: string;
  specialty: string;
  avgRating: number;
  totalRating: number;
  photo: StaticImageData;
  totalPatients: number;
  hospital: string;
}

export default IDoctor;
