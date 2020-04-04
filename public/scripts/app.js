$(() => {
  $.ajax({
    method: "GET",
    url: "/api/users",
  }).done((users) => {
    for (user of users) {
      $("<div>").text(user.name).appendTo($("body"));
    }
  });
});

//API for Menu Items
$(() => {
  $.ajax({
    method: "GET",
    url: "/api/menu",
  }).done((menu) => {
    for (item of menu) {
      $("<div>").text(item).appendTo($("body"));
    }
  });
});
