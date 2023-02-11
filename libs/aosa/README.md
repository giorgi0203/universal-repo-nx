
# aosa
#UNFINISHED!

This library was generated with [Nx](https://nx.dev).

github-monorepo [link](https://github.com/giorgi0203/universal-repo-nx)

aosa provides angular app with on scroll animations

example: [link](https://github.com/giorgi0203/universal-repo-nx/tree/master/apps/demo/src/app/pages/osa-demos/osa-demo/osa-demo)
first import `import { AosaModule } from  'aosa';` into `NgModule`
then:

    <div
	    class="grid grid-cols-4 gap-12 bg-gray-600 p-10"
	    aosa
	    [animationType]="'transform'"
	    [animationDir]="'bottom'"
	    [trackArray]="articles$  |  async"
	    (lastScroll)="onLastScroll($event)"
    >
	    <div
		    *ngFor="let  item  of  articles$  |  async"
		    class="w-auto h-96 bg-gray-700 my-5 shadow-xl"
		    aosa-item
	    >
	    {{ item.id }}
	    </div>
    </div>
demo app using tailwind 