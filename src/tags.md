---
layout: main
title: Tags
---

{% for tag in collections.tagList %}

<span>
    <a href="/tags/{{ tag }}"><button class="button-tag">
        {{ tag }}
    </button>
    </a>
</span>
{% endfor %}
