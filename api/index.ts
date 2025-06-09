// api/index.ts
import { VercelRequest, VercelResponse } from '@vercel/node';
import { createServer } from 'http';
import { Server } from 'http';
import { RequestHandler } from 'express';
import app from '../src';




export default function handler(req: VercelRequest, res: VercelResponse) {
  app(req, res);
}