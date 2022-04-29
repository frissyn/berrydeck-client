<template>
<Navbar>
  <NavbarItem>
    <a href="" class="btn btn-ghost normal-case text-xl rounded">BerryDeck</a>
  </NavbarItem>
  <NavbarFlexItem>
    <a class="btn btn-ghost btn-circle"><IconsMenu /></a>
  </NavbarFlexItem>
</Navbar>

<Drawer id="main-drawer">
  <DrawerContent>
    <Hero>
      <HeroContent>
      <p class="py-6">coming soon?</p>
      </HeroContent>
    </Hero>
  </DrawerContent>

  <DrawerSide id="main-drawer">
    <li class="bordered"><p>No savefile open.</p></li>
  </DrawerSide>
</Drawer>
</template>
