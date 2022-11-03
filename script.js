function submitForm(name, hometown) {
  //search the dom for a specific tag with the id "guestlist"
  var guestlist = document.getElementById( "guestlist");
  var n = document.getElementById( "name");
  var h = document. getElementById( "hometown");
  guestlist.innerHTML += "<li>" + name + " + hometown + "«/li>";
  n.value = "";
  h.value = "";
  n. focus();
  return false;
}
  