type DoctorDetailsProps = {
  params: {
    id: string;
  };
};

export default function DoctorDetails({ params: { id } }: DoctorDetailsProps) {
  console.log(id);

  return <div>DoctorDetails page</div>;
}
