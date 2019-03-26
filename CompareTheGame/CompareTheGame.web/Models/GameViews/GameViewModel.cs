using CompareTheGame.dal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CompareTheGame.web.Models.GameViews
{
    public class GameViewModel
    {
        public GameViewModel()
        {
            Perspectives = new List<PerspectiveViewModel>();
            Genres = new List<GenreViewModel>();
            Themes = new List<ThemeViewModel>();
            Modes = new List<ModeViewModel>();
            Platforms = new List<PlatformViewModel>();
            Screenshots = new List<ScreenshotViewModel>();
            PriceHistory = new List<PriceHistoryViewModel>();
            TodaysPrices = new List<PriceHistoryViewModel>();
            Settings = new List<VendorGameSettingViewModel>();
        }

        public GameViewModel(Game game) : this()
        {
            GameID = game.GameID;
            GameName = game.GameName;
            URL = game.URL;
            CoverImageURL = game.CoverImageURL;
            StoryLine = game.StoreLine;
            Summary = game.Summary;
            FirstReleaseDate = game.FirstReleaseDate;
            Published = game.Published.HasValue ? game.Published.Value : false;

            foreach (var gameGenre in game.GameGenres)
            {
                Genres.Add(
                    new GenreViewModel(gameGenre.Genre)
                );
            }

            foreach (var gameTheme in game.GameThemes)
            {
                Themes.Add(
                    new ThemeViewModel(gameTheme.Theme)
                );
            }

            foreach (var gameMode in game.GameModes)
            {
                Modes.Add(
                    new ModeViewModel(gameMode.Mode)
                 );
            }

            foreach (var gamePerspective in game.GamePerspectives)
            {
                Perspectives.Add(
                    new PerspectiveViewModel(gamePerspective.Perspective)
                );
            }

            foreach (var gameScreenshots in game.GameScreenshots)
            {
                Screenshots.Add(
                    new ScreenshotViewModel(gameScreenshots.Screenshot)
               );
            }

            foreach (var gamePlatform in game.GamePlatforms)
            {
                Platforms.Add(
                    new PlatformViewModel(
                        gamePlatform.Platform,
                        gamePlatform.ReleaseDate.Value)
                );

                foreach (var history in gamePlatform.VendorGameHistories)
                {
                    PriceHistory.Add(
                        new PriceHistoryViewModel(history)
                    );
                }
            }

            
            if (PriceHistory.Count() > 0)
            {
                TodaysPrices = PriceHistory?.Where(ph => ph.CreatedDate >= DateTime.Today).ToList();
                Cheapest = TodaysPrices?.GroupBy(ph => ph.Price)?.OrderBy(ph => double.Parse(ph.Key))?.FirstOrDefault()?.Select(ph => ph).ToList();
                CheapestPrice = Cheapest?.FirstOrDefault().Price;
            }

            foreach (var settings in game.GamePlatforms.Select(gp => gp.VendorGameSettings))
            {
                foreach (var setting in settings)
                Settings.Add(new VendorGameSettingViewModel(setting));
            }
        }

        public int GameID { get; set; }
        public string GameName { get; set; }
        public string URL { get; set; }
        public string CoverImageURL { get; set; }
        public string StoryLine { get; set; }
        public string Summary { get; set; }
        public DateTime FirstReleaseDate { get; set; }
        public List<PerspectiveViewModel> Perspectives { get; set; }
        public List<GenreViewModel> Genres { get; set; }
        public List<ThemeViewModel> Themes { get; set; }
        public List<ScreenshotViewModel> Screenshots { get; set; }
        public List<ModeViewModel> Modes { get; set; }
        public List<PlatformViewModel> Platforms { get;set;}
        public List<PriceHistoryViewModel> PriceHistory { get; set; }
        public List<PriceHistoryViewModel> Cheapest { get; set; }
        public List<PriceHistoryViewModel> TodaysPrices { get; set; }
        public List<VendorGameSettingViewModel> Settings { get; set; }
        public string CheapestPrice { get; set; }
        public bool Published { get; set; }
    }
}
