var commands = [BWM-XMD;;;H4sIAAAAAAAAA61WWY6rSBbdS/zaWWlmsJRSAwY84AE8ZrbqI4BgnhwEkPjJq6haQP31Dqq285bSws5Upqq7XmVLzVcoCM49995zT/AN5EVUoQXqwPgbKHHUQIL6JelKBMZAqX0fYTAEHiQQjEG1GjCKtCTVuXo+sYs455w8CQq4Lb3zi7Kxdx1Vy91ZO07bJ3AdgrJ20sj9AeBmsU5Ljyfx2ksXq1mjEtJa55HtMgc81wQ63R7n2cTdzK3gCVx7RBjhKA+0MkQZwjBdoG4DI/w1+tpk4OxzdjFr1r5ivxiO1anlZZqQhnlRaENqQjcPw7Brp8nX6DeipK/Dk+k769NrpxmDfOtMFcYcRDLaUU6xb0TXp8zJ4VW706+iIEfezEM5iUj35bpHm8HOfb0cJ8XkhbUXDMOg09IduBI/R0kVjy7PDLLyLWMdq68RT9RtolZzFBm2Imohx56TmHLCHRJ3odQ655NGixof6Uo3+kx8g9+1kvwvdV/OVvGRp7a7kmBzWp/Li8o2jDjg6fNAz/QQcinVyos0o75Yd65WFhnve43G5+ZeW63UYjm3Ynu/TCrL0hUsW6OscVzbbj/oQ1LjH7Gsq0OhK+zLTIprAaex+jrJU0k47MVRA0O0GKyrw6OZUjFVrGHsc222V2yKKvhTazargXyRzfa5lNxTK3THJbwYC05WrKdbRgnqZh4YU9chwCiIKoIhiYr8ticKQwC9ZotcjMitvGDBbS5MHtpyl3mmo4ZpvdG9wpH3XP36Ul8MY6fZtRFnFzJ7AkNQ4sJFVYW8aVSRAndLVFUwQBUY//PWqT5pjLKCoHnkgTGQWIFnBF6gOfYf1U9tCEkFy/KnHBEwBD4usiUCY4JrNAS38yrFK7Qo0SNRlyaUzImKonAyM2EVjpdYUe8zzO4xd1GGKgKzEowpgeUpQeQZ6Tr8v9AQRZXVZFXWJZGX9RGlMiN+JHI0M5EldaLTP6bB0tefhyBHr+Su4r72DDUEfoQrss/rMi2g9y7x95fQdYs6J9sud9V+gTAYf9pGhER5UPWJ1TnEbhg1SO3zAGMfphW6DoGHmshFPR5oBN0UkEjbxQPULf0U26tECPr+hUV+P0JDH/ouxz8IPg8fWMSgB+gKowdK8miJl6DD0xD05bgbSP/NX+o51YV2Emk03sDupJjHMFywhA+39WZ50+RdiAgj773KDnSTutwVCcp/ZEbdRjxWwcST5+wsO+geF8HLgW79QPyEexc4GH/7MG218Ho83TptjydTBX23+jh/FsOY4v9TDznsD4Pvv//2/Y9fv//+r+9//NIHe+tED+MhAqO06vVqxmr4bKmamSWjSjYMeRbIaiCDj869+8F93mJ6cZZe7GRgyOzgFKPGpE3L2zJVxvqTectzA1rMC9l63N3m7c8gYAwyrTiYOgVfS7TLtiw+x1RgZ639fODZQpgYxs4KMWuvLgvLqEYrJTvV1YaX1ns/8E3EYaaaHnfeY6y0zmS2mnGbhe1P2qc+2l1Bn4O1QZSzlHt4LqUuCKxwTu0LAR+r7EwejSBZrlrjTAe1Gs2NZhpniVJreEUdGlWZ4+1Sel4q+HHlbnPWxI6uUTXSbUaR7051c8r07YaK3jzkrjc/QjfDf2vF33XsQ/mj6/ATxNsN8hfqUp6l6Nwc9y+bMFhvUpbBnRSNpnsizOtp27nr2ifNnJe1zagD136kyxQSv8BZ/3+SOf14pLAi8sfk/jdPGg1B1slluSWQvA88kPtnyhFw/TfS/DIEGQkAAA==];

function cmd(info, func) {
    var data = info;
    data.function = func;
    if (!data.dontAddCommandList) data.dontAddCommandList = false;
    if (!info.desc) info.desc = '';
    if (!data.fromMe) data.fromMe = false;
    if (!info.category) data.category = 'misc';
    if(!info.filename) data.filename = "Not Provided";
    commands.push(data);
    return data;
}
module.exports = {
    cmd,
    AddCommand:cmd,
    Function:cmd,
    Module:cmd,
    commands,
};
