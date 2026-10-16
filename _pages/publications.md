---
layout: page
permalink: /publications/
title: publications
description: Journal articles and conference papers, newest first.
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications qm-pubs">

<h2 class="qm-pubtype">Journal Articles</h2>

{% bibliography --query @article %}

<h2 class="qm-pubtype">Conference Papers</h2>

{% bibliography --query @inproceedings %}

</div>
