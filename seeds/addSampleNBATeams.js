
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('nbaTeams').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('nbaTeams').insert({id: 1, teamName: 'Atlanta Hawks', primaryColour: "red", secondaryColour: "navy", imageURL: "http://i.cdn.turner.com/drp/nba/hawks/sites/default/files/primary.jpg"}),
        knex('nbaTeams').insert({id: 2, teamName: 'Boston Celtics', primaryColour: "green", secondaryColour: "white", imageURL: "http://vignette3.wikia.nocookie.net/logopedia/images/d/d2/BostonCeltics80slogo.gif/revision/latest?cb=20100915180201"}),
        knex('nbaTeams').insert({id: 3, teamName: 'Cleveland Cavaliers', primaryColour: "maroon", secondaryColour: "blue", imageURL: "https://www.seeklogo.net/wp-content/uploads/2015/11/cleveland-cavaliers-logo-vector-download.jpg"}),
        knex('nbaTeams').insert({id: 4, teamName: 'Chicago Bulls', primaryColour: "red", secondaryColour: "white", imageURL: "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Chicago_Bulls_logo.svg/475px-Chicago_Bulls_logo.svg.png"}),
        knex('nbaTeams').insert({id: 5, teamName: 'Golden State Warriors', primaryColour: "blue", secondaryColour: "yellow", imageURL:"http://www.underconsideration.com/brandnew/archives/warriors_primaryLogo.jpg"}),
        knex('nbaTeams').insert({id: 6, teamName: 'Los Angeles Lakers', primaryColour: "purple", secondaryColour: "gold", imageURL: "http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/lal.png"}),
        knex('nbaTeams').insert({id: 7, teamName: 'San Antonio Spurs', primaryColour: "black", secondaryColour: "white", imageURL:"https://hdlogo.files.wordpress.com/2016/02/san-antonio-spurs-hd-logo1.png?w=500"}),
        knex('nbaTeams').insert({id: 8, teamName: 'Miami Heat', primaryColour: "red", secondaryColour: "yellow", imageURL: "http://i360.photobucket.com/albums/oo42/delasean002/heats3_zps15712c8c.png"}),
      ]);
    });
};
