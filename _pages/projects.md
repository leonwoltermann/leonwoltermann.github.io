---
layout: archive
title: "Projects"
permalink: /projects/
author_profile: true
---

###### This page contains an overview of projects I have been working on in my free time. 

{% include base_path %}

{% for post in site.projects %}
  {% include archive-single.html %}
{% endfor %}
