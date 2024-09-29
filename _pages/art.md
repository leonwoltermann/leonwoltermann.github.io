---
layout: archive
title: "Generative Art"
excerpt: Information about projects I have worked on that include interactive outputs.
permalink: /art/
author_profile: true
---

{% include base_path %}

{% for post in site.art %}
  {% include archive-single.html %}
{% endfor %}
