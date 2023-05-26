import Fuse from 'fuse.js';
import location from './location.json';
import fuseindex from './fuseindex.json';

export default function handler(req, res) {
	const { searchlocation } = req.query;
	const options = {
	minMatchCharLength: 3,
    threshold: 0.2,
    keys: [
      "c"
    ]
  };
  const fuse = new Fuse(location, options, Fuse.parseIndex(fuseindex));
  res.status(200).json(fuse.search(searchlocation));
 }