import {
  Tree,
  formatFiles,
  generateFiles,
  getWorkspaceLayout,
  installPackagesTask,
  joinPathFragments,
  readProjectConfiguration,
} from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';

export default async function (tree: Tree, schema: any) {
  const wsLayout = getWorkspaceLayout(tree);

  generateFiles(
    tree, // the virtual file system
    joinPathFragments(__dirname, './files'), // path to the file templates
    `${wsLayout.appsDir}/frontend/${schema.name}`, // destination path of the files
    { ...schema, mfName: schema.name } // config object to replace variable in file templates
  );

  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}
