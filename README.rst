==============
Package Helper
==============

.. image:: https://readthedocs.org/projects/package-helper/badge/?version=latest
        :target: https://package-helper.readthedocs.io/en/latest/?badge=latest
        :alt: Documentation Status

Package Helper 2 explains how to create, develop and maintain a Python package.

The most prominent feature of Package Helper is a **tutorial** that gives a checklist of how to:

* Create your package in a few minutes with Cookiecutter_,
* Develop and maintain your package with PyCharm_.

Optionally, you can also use GitHub_, ReadTheDocs_, Travis-CI_, PyPI_, Codecov_ and Pyup_. For more readability, the
tools that you do not use can be hidden in the tutorial.

Package Helper also provides a **template** of Python package. It is a fork of
https://github.com/audreyr/cookiecutter-pypackage/. Here are the main differences with the original template:

* Personalize default options.
* Include example files for classes, with examples of documentation and testing.
* Documentation:

  * Use ``sphinx.ext.napoleon`` to benefit from NumPy style of documentation.
  * Use ReadTheDocs theme.
  * Add a "reference" section in the documentation of the package.

* Make Travis run also the doctests.
* Use Codecov.
* Minor tweaks in ``setup.py``.
* Remove version numbers from ``requirements_dev.txt``.

Documentation: https://package-helper.readthedocs.io/.

.. _Cookiecutter: https://github.com/audreyr/cookiecutter
.. _PyCharm: https://www.jetbrains.com/pycharm
.. _GitHub: https://github.com
.. _ReadTheDocs: https://readthedocs.org
.. _Travis-CI: https://travis-ci.org
.. _PyPI: https://pypi.python.org/pypi
.. _Codecov: https://codecov.io
.. _Pyup: https://pyup.io
