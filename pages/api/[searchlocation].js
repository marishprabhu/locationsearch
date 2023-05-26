// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Fuse from 'fuse.js';

import location from './location.json';

export default function handler(req, res) {
	const { searchlocation } = req.query;
	const options = {
	minMatchCharLength: 3,
    threshold: 0.2,
  keys: [
    "c"
  ]
};
	const fuse = new Fuse(location, options);
  res.status(200).json(fuse.search(searchlocation));
}
