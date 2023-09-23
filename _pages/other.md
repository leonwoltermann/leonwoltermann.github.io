---
layout: archive
title: "Other"
permalink: /other/
author_profile: true
---

Postings that do not fit in the other categories

{% include base_path %}

{% for post in site.other %}
  {% include archive-single.html %}
{% endfor %}