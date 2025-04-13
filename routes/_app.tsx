import { PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { Provider } from "@/islands/ContextProvider.tsx";

export default function App({ Component }: PageProps) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/app.css" />
      </Head>
      <Provider>
        <Component />
      </Provider>
    </>
  );
}
