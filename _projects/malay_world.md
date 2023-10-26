---
title: "The Malay World as a Wikipedia Hyperlink Network"
excerpt: "In this project, I  analyzed semantic relationships between Wikipedia pages related to the Malay World based on hyerlinks."
#<br/><img src='/images/500x300.png'>"
collection: projects
---

A word or a concept by itself is meaningless. It is the connection to others that gives a word meaning (De Saussure, 1959, p. 114). Thus, “the meaning of a word can be defined as an indefinite set of interpretants, which are other words that circumscribe the semantic content of the word they represent.” These chains of meaning are not linear but interconnected and thereby form a rhizomatic structure (Masucci et al., 2011, p. 1). Within this structure, words form certain relationships that can be considered semantic fields , semantic networks , or semantic spaces . 
“Malay World” is one such word that is embedded in a complex structure of relationships to other words or concepts and is thereby assigned meaning. A tangible instance of such a structure can be found in the online encyclopaedia Wikipedia. From the perspective of encyclopaedic semantics, each Wikipedia page can be considered a “population of interpretants” (Masucci et al., 2011, p. 1). Thus, a Wikipedia page represents an entity that is defined by its hyperlinks to other Wikipedia pages. In turn, the linked Wikipedia pages can represent entities themselves which are equally defined by their hyperlinks.

Thus, to answer my research question, as the first analytical step I employed Social Network Analysis (with Gephi) to examine the relations between Wikipedia pages that are embedded in the Semantic Space surrounding the Malay World. More precisely, I considered “the global distribution of connectivity” in this same network. This type of reading aims to interpret camps of node clusters and construe the meaning of these communities of nodes (Venturini et al, 2017, p. 160-161). In the context of Social Network Analysis, the term community is understood as a “group of nodes that are highly connected to each other but loosely connected to the rest of the network” (Fiscarelli, 2022, p. 20). These communities are calculated by a modularity algorithm that assigns to each node a modularity class. These modularity classes represent communities or camps of nodes in a network (Barabási, 2015). I argue that approaching these communities narratively, as proposed by Venturini et al. (2017), reveals the semantic components of meaning that are constitutive of the concept of the Malay World.

Consequently, the starting point in the data collection process was the Wikipedia page for the Malay World.   From there, I first collected all linked pages and further all links of the linked pages by using the library Networkx and the Wikipedia API for Python (see Appendix: Python Script 1). In the resulting data, nodes are represented by Wikipedia pages (the labels of the nodes are the titles of the pages) and edges by hyperlinks between the pages. Since hyperlinks have a direction (they link to one another), the edges are directed making the network a directed network.  After sorting out plural duplicates (labels that end with the letter s: Pacific Island and Pacific Islands) and relations that link to themselves, the resulting network data included 36799 nodes and 73304 edges. To truncate the network and sort out insignificant nodes, I just kept nodes in the network that have five or more connections. Thus, the final network data includes 2563 nodes and 19991 edges. I exported the Networkx object as a GraphML file to import it into Gephi.


Modularity Network
======

In this first network, the color of nodes is determined by their modularity class i.e., “groups of nodes that are highly connected to each other but loosely connected to the rest of the network” (Fiscarelli, 2022, p. 20).

Explore interactive network in [fullscreen](/projects/malay-world-network-modularity/index) (recommended) (unfortunately not for smartphone)

{% raw %}
<div>
<iframe src="/projects/malay-world-network-modularity/index" width="130%" height="700" frameborder="0"></iframe>
</div>
{% endraw %}






<br><br>


Topic Modeling Network
======

In this second network, the color of nodes is determined by the most protruding topic. Topics were calculated through a process called topic modelling that detects "recurring pattern of co-occurring words" (Brett, 2012) which was applied to the summaries of the Wikipedia pages.

Explore interactive network in [fullscreen](/projects/malay-world-network-modularity/index) (recommended) (unfortunately not for smartphone)

{% raw %}
<div>
<iframe src="/projects/malay-world-network-topic/index" width="130%" height="700"  frameborder="0"></iframe>
</div>
{% endraw %}

