import { MantineProvider } from "@mantine/core";

export type ProvidersProps = {
  children: React.ReactNode;
};
export default function Providers({ children }: ProvidersProps) {
  return <MantineProvider>{children}</MantineProvider>;
}
