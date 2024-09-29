---
layout: archive
title: "Other"
excerpt: Fun and interesting content that doesn't fit into the other categories.
permalink: /other/
author_profile: true
---

{% include base_path %}

{% for post in site.other %}
  {% include archive-single.html %}
{% endfor %}