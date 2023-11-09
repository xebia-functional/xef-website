---
title: Integrations
sidebar_custom_props:
  icon: icon-integrations.svg
  overview: true
---

import { useCurrentSidebarCategory } from '@docusaurus/theme-common';
import DocCardList from '@theme/DocCardList';

# <decorated-text icon={useCurrentSidebarCategory().customProps.icon} title={frontMatter.title} />

<p>{useCurrentSidebarCategory().customProps.description}</p>

<DocCardList />
