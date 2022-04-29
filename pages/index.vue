<template>
<Navbar>
  <NavbarItem>
    <a href="/" class="btn btn-ghost normal-case text-xl rounded">BerryDeck</a>
  </NavbarItem>
  <NavbarFlexItem>
    <a href="https://github.com/frissyn/berrydeck-client" class="btn btn-ghost normal-case text-md rounded-">
      <IconsLogoGithub />&nbsp;View on GitHub
    </a>
  </NavbarFlexItem>
</Navbar>

<Hero>
  <HeroContent>
    <h1 class="text-5xl font-bold">BerryDeck</h1>
    <p class="py-6">Interactive savefile editor and statistics viewer for Celeste.</p>
    <div class="btn-group w-full">
      <a class="btn btn-active rounded w-1/2" href="/editor"><IconsPlus /> New Savefile</a>
      <a class="btn rounded w-1/2" href="/editor"><IconsFolder /> Open Savefile</a>
    </div>
  </HeroContent>
</Hero>

<Footer>
  <FooterItem>
    <IconsHashtag /><p>Made with 💜 by <a class="link link-accent">frissyn</a></p>
  </FooterItem>
</Footer>
</template>
