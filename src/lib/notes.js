import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const notesDirectory = path.join(process.cwd(), 'src/data/notes');

/**
 * Get all note files from the notes directory
 * Returns an array of note objects with frontmatter and content
 */
export function getAllNotes() {
  // Get all files in the notes directory
  const fileNames = fs.readdirSync(notesDirectory);
  
  // Filter to only .md files
  const markdownFiles = fileNames.filter(name => name.endsWith('.md'));
  
  // Read and parse each markdown file
  const notes = markdownFiles.map((fileName) => {
    const fullPath = path.join(notesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    // Parse frontmatter and content
    const { data, content } = matter(fileContents);
    
    // Use filename (without extension) as id
    const id = fileName.replace(/\.md$/, '');
    
    return {
      id,
      title: data.title || '',
      date: data.date || '',
      image: data.image || null,
      published: data.published !== undefined ? data.published : true, // Default to true if not specified
      content: content.trim(),
      // Sort key for ordering (using date or filename)
      sortKey: data.date || fileName,
    };
  }).filter(note => note.published === true); // Only include published notes
  
  // Sort by date (newest first) - handles MM/DD/YYYY format
  notes.sort((a, b) => {
    if (a.date && b.date) {
      // Parse MM/DD/YYYY format
      const parseDate = (dateStr) => {
        const parts = dateStr.split('/');
        if (parts.length === 3) {
          // MM/DD/YYYY
          return new Date(parseInt(parts[2]), parseInt(parts[0]) - 1, parseInt(parts[1]));
        }
        // Fallback to standard date parsing
        return new Date(dateStr);
      };
      return parseDate(b.date) - parseDate(a.date);
    }
    return b.sortKey.localeCompare(a.sortKey);
  });
  
  return notes;
}

/**
 * Get a single note by filename (without .md extension)
 */
export function getNoteById(id) {
  const fullPath = path.join(notesDirectory, `${id}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  return {
    id,
    title: data.title || '',
    date: data.date || '',
    image: data.image || null,
    content: content.trim(),
  };
}

