interface PopularItem {
  id: number;
  image: string; // Assuming images is a string representing the image source
  text: string;
}

interface SearchItem {
  id: number;
  title: string;
  rating: number;
  bookmarks: string;
  status: string;
  image: string;
}

interface BrowseData {
  image: string;
  title: string;
  tags: string[];
  description: string;
  stars: number;
  bookmarks: string;
  status: string;
}

interface LibraryData{
  items: BrowseData[]
}

interface LibrariesData{
  [Reading: string]: LibraryData;
  [Completed: string]: LibraryData;
  [Plan_to_Read: string]: LibraryData;
  [On_Hold: string]: LibraryData;
}