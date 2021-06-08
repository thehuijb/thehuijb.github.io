---
layout: main
pagination:
  data: collections
  size: 1
  alias: tag
permalink: /tags/{{ tag }}/
eleventyComputed:
  title: "{{ tag }}"
---  

{% for post in collections[tag] %}
<div class="tag-posts">
  <p>
    <span class="tag-post"><a href="{{ post.url }}">{{ post.data.title }}</a></span>
  </p>
  <em>{{ post.date | date: "%Y-%m-%d" }}</em>
  <p class="">{{ post.data.post_excerpt }}... 
    <span class=""><a href="{{ post.url }}">Read More</a></span>
  </p>
</div>
{% endfor %}
