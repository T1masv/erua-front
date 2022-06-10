function toElement(s = "", c, t = document.createElement("template"), l = "length") {
    t.innerHTML = s.trim();
    c = [...t.content.childNodes];
    return c[l] > 1 ? c : c[0] || "";
  }

export{toElement};