# KOPYKAT 9/6/2020 
## This Is An Auto-generated File

>**11:09:54 AM**

```JavaScript
#!/usr/bin/env node
"use strict";

const qoa = require("qoa");
const Conf = require("conf");
const fs = require("fs");
const config = new Conf();
```

>**11:10:06 AM**

```Java
if (config.has("style")) {
    style = config.get("style");
  }
  if (config.has("type")) {
    type = config.get("type");
  }
```

>**11:10:12 AM**

```JavaScript
if (type === "HTML") {
    return `<a href="${url}"><img alt="${alt}" src="${provider}${path}style=${style}"/></a>`;
  } else if (type === "MarkDown") {
    return `[![${alt}](${provider}${path}style=${style})](${url})`;
  }
};
```

>**11:10:16 AM**

```JavaScript
text += make_a_row(followers);

  var forks = get_badge_text(
    shields,
    `/github/forks/${user}/${repo}?`,
    `https://github.com/${user}/${repo}/network/members`,
    "Forks"
  );
```

>**11:10:26 AM**

```JavaScript
// console.log(forks);
  text += make_a_row(forks);

  var stars = get_badge_text(
    shields,
    `/github/stars/${user}/${repo}?`,
    `https://github.com/${user}/${repo}/stargazers`,
    "Stars"
  );
  // console.log(stars);
  text += make_a_row(stars);
```

>**11:55:43 AM**

```HTML
<a href="https://imgur.com/ad8GXmt"><img src="https://i.imgur.com/ad8GXmt.jpg" title="source: imgur.com" /></a>
```