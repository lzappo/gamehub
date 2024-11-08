import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  const large = window.innerWidth > 768;
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <Show when={large}>
        <GridItem area={"nav"} bg={"coral"}>
          Nav
        </GridItem>
      </Show>
      <GridItem
        area={"aside"}
        bg={"gold"}
        display={{ base: "none", lg: "block" }}
      >
        Aside
      </GridItem>

      <GridItem area={"main"} bg={"dodgerblue"}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
